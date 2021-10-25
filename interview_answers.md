# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

** Context API helps solve prop drilling and passing props through grandparents and parents. It creates a global state that can be accessed anywhere in the application.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

** actions: seems to me like action holds the work that will be done, like an axios call or maybe a new item added to the object.
** reducer: the reducer actually manipulates the "state of truth", this takes in the action and manipulates our initialValues accordingly.
** store: I think this just lets our whole application use our actions and reducers as "the state of truth"


3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

**thunk feels a lot like useEffect, it only allows certain actions to fire when conditions are met. although, its weird that it's called thunk.... 

4. What is your favorite state management system you've learned and this sprint? Please explain why!

** so far, I believe context api is much easier than that whole redux deal, it feels easier to connect things and write actions and reducers. 