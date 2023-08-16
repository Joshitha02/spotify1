export const initialState = {
    user:null,
    playlists : [],
    playing:false,
    item:null,
   
    //token:'BQAy5RvwZe2P5jOQv111leFN-kTFRGh8RI3_r6fz0l1ekrKRgLkevFM3S02cocyBh-L8_YMEC90Eehc25nYjDpwTlOVVzPMsXfYBBFHUY29lFOmNmwZzWebpJZEmKqIOkFzRSWG6aKCZHeC9zsjZ0Kbng41A7paeCkBj_DcG5fDIyeyxe7TFs2qBhBYYuXVMYa-ECBsefF_CYkQH_XfI',
};
//state is a memoory type,and action is like setState
const reducer  = (state,action)=>{
    console.log(action);

    switch(action.type)
    {
        case 'SET_USER':
        return {
            ...state,//state is set to be same whatever it was
            user:action.user//updating user
        };
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            }
        default:
            return state;
    }

}

export default reducer;
