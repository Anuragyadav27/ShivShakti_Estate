import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String , required: true, unique: true
    },
    email: {
        type: String , required: true, unique: true
    },
    password: {
        type: String , required: true
    },
    avatar:{
        type: String , 
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fblank-profile-image&psig=AOvVaw2E1gnEufWDVanlmdMvTZf2&ust=1700064127112000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNC6qcfuw4IDFQAAAAAdAAAAABAE"
    },
} , {timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;