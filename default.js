
import News from './module/news.js'
import { data }  from './constants/data.js'

const Defaultdata = async () => {
    try{
        await News.deleteMany({});
       await News.insertMany(data);

       console.log('data imported success...')

    }catch(error) {
        console.log("Error in Deafultdata",error)
    }

}

export default Defaultdata;