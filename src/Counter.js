export const inititalState={
    count:0
}
export const Reducer=(state,action)=>{
    switch(action.type)
    {
        case 'inc':
            
            return {
                count:state.count+1
            }
        case 'dec':
        return {
            count:state.count-1
        }
        default:
            throw new Error();  
    }
}
