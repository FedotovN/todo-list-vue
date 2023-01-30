export const categoriesModule = {
    state: ()=> ({
        categories: []
    }),
    mutations: {
        pushCategory(state, category){
            state.categories.push(category)
        },
        removeCategory(state, id){
            state.categories = state.categories.filter(el => el.id !== id)
        },
        editCategory(state, color, id){
            state.categories.forEach(element => {
                if(element.id === id){
                    element.color = color
                    return
                }
            });
        },
    },
    actions: {
        saveCategories({state}){
            localStorage.setItem("categories", JSON.stringify(state.categories))
        },
        loadCategories({state}){
            let categories = JSON.parse(localStorage.getItem("categories"))
            if(categories)
                state.categories = categories
            else state.categories = []
        }
    },
    namespaced: true
}