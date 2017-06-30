export const CHANGE_DISPLAY = 'NAVIGATION/CHANGE_DISPLAY';

export const changeDisplay = (targetDisplay) => {
    return {
        targetDisplay,
        type: CHANGE_DISPLAY
    };
};
