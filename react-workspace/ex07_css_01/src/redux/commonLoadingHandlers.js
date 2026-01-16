export const commonLoadingHandlers = {
    pending : (state) => {
        state.loading = true;
        state.error = null;
    },
    rejected : (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "알 수 없는 에러";
    }
};