import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const MeeupDetails = (props) => {
    // const dummy = [
    //     {
    //         id: 1,
    //         title: 'first meetup',
    //         image: 'https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         address: 'first address',
    //         description: 'first description'
    //     },
    //     {
    //         id: 2,
    //         title: 'second meetup',
    //         image: 'https://images.pexels.com/photos/11499270/pexels-photo-11499270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         address: 'second address',
    //         description: 'second description'
    //     },
    // ]

    // const router = useRouter();
    // const id = router.query.id;
    // const idx = dummy.findIndex(d => d.id == id)
    // const meet = dummy[idx]

    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description"
                    value={props.meetupData.description} />
            </Head>
            <img src={props.meetupData.image} />
            <h3>{props.meetupData.title}</h3>
            <address>{props.meetupData.address}</address>
            <p>{props.meetupData.description}</p>
        </Fragment>

    )
}

export const getStaticPaths = async () => {
    const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.bfusjly.mongodb.net/nextjs?retryWrites=true&w=majority');
    const db = client.db();
    const meetupcollection = db.collection('meetups')
    const result = await meetupcollection.find({}, { _id: 1 }).toArray()
    await client.close()

    return {
        fallback: false,
        paths: result.map(m => ({
            params: { id: m._id.toString() }
        }))
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id

    const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.bfusjly.mongodb.net/nextjs?retryWrites=true&w=majority');
    const db = client.db();
    const meetupcollection = db.collection('meetups')
    const selectedResult = await meetupcollection.findOne({ _id: new ObjectId(id) })
    await client.close()

    return {
        props: {
            meetupData: {
                id: selectedResult._id.toString(),
                title: selectedResult.title,
                address: selectedResult.address,
                image: selectedResult.image,
                description: selectedResult.description
            }
        }
    }

}

export default MeeupDetails;