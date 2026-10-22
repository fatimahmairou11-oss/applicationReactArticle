const initialState = {
    articles: [
        { id: 10, designation: 'article1', famille: 'informatique' },
        { id: 11, designation: 'article2', famille: 'bureau' }
    ]
};

export const ArticleReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_ARTICLE": 
            return {
                ...state,
                articles: [...state.articles, action.payload]
            };
            
        case "DELETE_ARTICLE":
            return {
                ...state,
                articles: state.articles.filter(a => a.id !== Number(action.payload))
            };
            
        case "UPDATE_ARTICLE":
            return {
                ...state,
                articles: state.articles.map(a => 
                    a.id === action.payload.id ? { ...a, ...action.payload } : a 
                )
            };
            
        default:
            return state;
    }
};