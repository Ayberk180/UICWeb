module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAkbaMem: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
        
    });

    const Posts = sequelize.define("Posts", {
        Title:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Users, Posts;
}