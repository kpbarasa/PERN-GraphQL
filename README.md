### node-express-server
#### PERN-GraphQL--APP
#### QUERY STRINGS
##### ROOTQUERY
=============================================================================== 
{
  
  ###### Dashboard Data 
```
  dashboard_data{
    repository_info{
      posts_no,
      datatype_no,
      authors
    },
    repository_categories_info{
      cat0,
      cat1,
      cat2,
      cat3,
      cat4,
      
    }
  }
```
  
 ###### Get Single 
```
  post(post_id:1){
    post_title,
    author_id,
    posts{
    author_name  
    }
  }
```
  
  ###### Select all Posts
```
  posts{
    posts{
      author_name
    }
  }
```

  ###### Filter Posts
```
  filter_posts(post_type:"a,c,g",post_cat:"b"){
      post_title,
      post_id
    
      posts{
        author_name
      }
  }
```
  ###### Select all Authors
```
  authors{
    author_id,
    author_name,
    author_age,
    author_type,
    author_email,
    authors{
      post_title
    }
```
  
  ###### Author By ID I
```
  author(author_id:1){
    author_id,
    author_name,
    author_email,
    author_age,
    author_type
  }
```
  
  

##### MUTATION
===============================================================================

{
  mutation
  
   ###### New Post  
   
```
  addPost(
    post_title:"title", 
    post_type:"b", 
    post_description:"decription"
  ){
    post_title,
    post_type,
    post_description
  }
  
``` 
   ###### Update Post 
```
  updatePosts(post_id:1,  post_type:"update", post_title:"update", post_description:"descritpion update"){
    post_id,
    post_type,
    post_title,
    post_description
  }
```
  
   ###### Delete Post
```
  deletePost(post_id:1){
    post_id
  }  
```
   ###### New Author 
```
  addAuthor(
    author_name:"author", 
    author_age:22, 
    author_type:"decription", 
    author_email:"email@emial.com", 
  ){
    author_name
    author_age
    author_type
    author_email
  }
``` 
  
   ###### Update Author 
```
  updatePosts(post_id:1,  post_type:"update", post_title:"update", post_description:"descritpion update"){
    post_id,
    post_type,
    post_title,
    post_description
  }
```
  
   ###### Delete Author
```
  deleteAuthor(author_id:1){
    author_id
  }   
```
  
}
