//  This is a temporay util function to filter users based on the keyword
//  This function will be replaced by the actual search function in the database

export const filteredUsers = (keyword: string, users: any[]) => {
  users.filter(user => {
    const searchText = `${user.supplyList} ${user.description}`.toLowerCase();
    return searchText.includes(keyword.toLowerCase());
  }
  )
};