**Question**: How long did you spend on the coding assignment? What would you add to your solution if you had more time?
**Answer**: I took 2 days. I was thinking instead of pagination I could some sort of approach so that when user scrolls to the end it the page would fetch more results. Also I could have used redux but since I am relatively new in react I am yet to learn it. Maybe I will implement it when I will learn it.


**Qusetion**: What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
**Answer**: I have to say *Ownership* feature in rust which enables Rust to make memory safety guarantees without needing a garbage collector. It is a wide subject but here is a simple example where a function takes ownership of a variable.
Example:
```rust
fn main() {
    let s = String::from("hello");  // s comes into scope

    takes_ownership(s);             // s's value moves into the function...
                                    // ... and so is no longer valid here

}

fn takes_ownership(some_string: String) { // some_string comes into scope
    println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing
  // memory is freed.
```

**Question**: How would you track down a performance issue in production? have you ever had to do this?
**Answer**: I never did this. But I think Performance tab in development tools in a browser can be helpful.

**Question**: How would you improve the API that you just used?
**Answer**: The parame ter "per_page" only allows specific values (25, 50, 75, 100 in this case). I think it can be more flexible to allow other values. Also maybe implement it in graphQL.

**Question**: Please describe yourself using JSON.
**Answer**: Okay
```javascript
  {
    name: 'Aditya Jain',
    role: 'developer',
    hobbies: ['fitness', 'programming', 'retro gaming', 'reading books (Philosophy mostly)']
    skills: ['java', 'python3', 'javascript', 'springboot', 'react.js', 'django web-framework'],
    experience: [
      {
        duration: '8 months',
        technology: ['java', 'springboot', 'JSP'],
        account: 'TD bank'
      }
    ]
  }
```
