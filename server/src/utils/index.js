module.exports.FormateData = (data) => {

  if (data) {
    const { message, response_data, status } = data
    return { status, message, response_data }
  } else {
    throw new Error('Data Not found!')
  }

}

module.exports.filterList = async (list_data, list_category, posts_data) => {

  list_data.split(",")
  const filtered_posts = []

  list_data.split(",").map(list => {

    const data = posts_data.filter(posts => posts.post_type.includes(list))

    data.map(res =>
      filtered_posts.push(res)
    )
  })

  if (list_category) {

    list_category.split(",").map(list => {

      const data = posts_data.filter(posts => posts.post_type.includes(list))

      data.map(res =>
        filtered_posts.push(res)
      )
    })

  }

  return filtered_posts

}
