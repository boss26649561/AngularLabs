# Assignment2
# For testing
Externally facing tests -> npm test in server folder
# Describe the layout of your git repository and the approach you took for version control.

Layout of the Git repository is a standard Angular project setup for all the front end code and the backend code is in the server folder run via express. Approach for version control is by consistent commits every time a set of function is complete.

# Describe the main data structures used in the program. For example, how the users and groups are represented.
I created 3 database collections for this program, users,group and channel. The users structure stores an array of objects storing username,email,password and role. The Groups structure stores an array of objects storing name (name of the group), array of users (that have permission to the group) and an Channels array storing id of the channel. Lastly the Channels data structure stores an array of objects storing id, group(name of the group the channel belongs to) and an array of chat (stores arrays of strings).

For the angular structure, I had a total of 7 components. Login,Chat and 4 pages for each type of user (admin,group admin, assistant, normal user).

# The Angular front end should communicate with the Node.js server using a REST API. Describe each route provided, parameters, return values, and what it does.
## Route files
    require("./routes/users.js")
    require("./routes/groups.js")
    require("./routes/login.js")
    require("./routes/UserGroup.js")
    require("./routes/channels.js")
    require("./routes/group.js")
    require("./routes/chat.js")

api/login post route takes an user object in the body parameters and checks the Users.json file to see if the usernames match. If it matches it returns data.ok back to the frontend else it returns data.ok==false

api/Users get route grabs all username in the user.json file and pushes them to an array which is returned along with data.ok==true if successful.

api/User put route route takes an user object in the body parameters and checks the Users.json to check if the user exists. If the user exists then the user object is deleted from the json file and rewritten back to the server. If the user doesn’t exist then data.ok is returned to front end as false. 

api/User post route takes an user object in the body parameters and checks the Users.json file to see if an existing user exists. If User exists then it returns data.ok==false back to front end, if user doesn’t exist then it writes a new user object to the json and returns data.ok to the front end.

api/chat post route takes an id in the body parameter and then searches through channel.json to find matching id. Once the id is found the Chat array is returned with data.ok ==true.

api/chat put route takes id and chat in the parameter and searches channel.json to find matching id, the data structure is then updated with new chat and data.ok==true is returned if successful.

api/Channel post route takes name and id in the body parameter and then creates a new channel object with the name,id, The object is written back to the json file. data.ok==true is returned if successful.

api/groups get route grabs the json file and returns the file, along with the highest current id and data.ok==true is returned if successful.

api/group get route takes a name in the body parameter and creates a new Group object with that name. It reads the group json and writes the group json back with the new group. Data.ok==true if successful

api/Groups post route takes a username in the body parameter and searches through group.json and appends all groups with that containing that username to an array. Another loop is done through the json to find the current id that channels is at. Group array, id is returned with data.ok ==trueif successful and data.ok==false if there is an error.

api/Group put route takes name in the body parameter and then searches through group.json for matching name. Once found, that object is deleted and rewritten back to the json file. data.ok==true is returned if successful.

api/userGroup post put route takes group and username in the body parameter and then searches through group.json for matching group name. Once found, it searches through the user array and deletes the username when found. The data is rewritten back to the json file. data.ok==true is returned if successful.

api/userGroup post route takes group and user in the body parameter and then searches through group.json for matching name. Once found, the user is added to the user array and rewritten back to the json file. data.ok==true is returned if successful.

npm test





# Describe your Angular architecture in terms of components, services, and models.
The angular architecture used was mostly components. A component was generated for each role of  the user. After logging in with the Log in component, the router directs the user to a page depending on the users role. There are a total of 4 component for each role and also a shared chat component for all users. For the services I had an api service and a socket service (for the chat page).
