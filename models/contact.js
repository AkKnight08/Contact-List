const mongoose=require('mongoose');
const contactscheme= new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true
        },
        phone:
        {
            type:String,
            required:true
        }
    }
);
const Contact = mongoose.model('Contact',contactscheme);
module.exports=Contact;