

import mongoose from 'mongoose';

const  Connection  = async (user1 = 'user1',password = 'deepakchand') => { 
     const URL =`mongodb+srv://${user1}:${password}@cluster0.q9hwudw.mongodb.net/?retryWrites=true&w=majority`;
      console.log('database connected successfully');
     try{ 
      mongoose.connect(URL,{ useUnifiedtopology:true , useNewUrlParser:true});

     }catch(error){
       console.log('error is this',error)
     }
}

export default Connection;
