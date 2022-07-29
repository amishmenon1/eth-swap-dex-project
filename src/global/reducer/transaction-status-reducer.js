import { toast } from "react-toastify";
import TransactionStatus from "global/transaction-status";

export function transactionStatusReducer(state, action) {
  console.log("votingStatusReducer --- render");
  switch (action.type) {
    case TransactionStatus.IDLE: {
      console.log("votingStatusReducer --- status: idle");
      return {
        status: TransactionStatus.IDLE,
        votingState: null,
        error: null,
      };
    }
    case TransactionStatus.PENDING: {
      console.log("votingStatusReducer --- status: pending");
      toast.warn("Placing vote...", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      return {
        ...state,
        ...action.votingState,
        status: TransactionStatus.PENDING,
        error: null,
      };
    }
    case TransactionStatus.VOTES_LOADING: {
      console.log("votingStatusReducer --- status: votes loading");
      return {
        ...state,
        status: TransactionStatus.VOTES_LOADING,
        error: null,
      };
    }
    case TransactionStatus.VOTE_ACTION_RESOLVED: {
      console.log("votingStatusReducer --- status: resolved");
      toast.success("Vote successful. Please wait for vote count to refresh.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      return {
        ...action.votingState,
        status: TransactionStatus.VOTE_ACTION_RESOLVED,
        error: null,
      };
    }
    case TransactionStatus.VOTES_LOADED: {
      console.log("votingStatusReducer --- status: votes loaded");
      return {
        ...action.votingState,
        status: TransactionStatus.VOTES_LOADED,
        error: null,
      };
    }

    case TransactionStatus.REJECTED: {
      debugger;
      console.log(
        "VotingContextProvider --- reducer --- status: rejected",
        action.error
      );
      toast.error(
        "Failed to fetch. Check Metamask connection: " + action.error,
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 10000,
        }
      );
      return {
        status: TransactionStatus.REJECTED,
        // data: null,
        error: action.error,
      };
    }
    default: {
      console.log("VotingContextProvider --- reducer --- should not occur");
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
