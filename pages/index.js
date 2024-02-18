import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
import Head from "next/head";


const Home = (props) => {
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
    return <Fragment>
        <Head>
            <title>Meetups</title>
            <meta name="description"
                value="nextjs implemented" />
        </Head>
        <MeetupList meetups={props.meetups} />
    </Fragment>

}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.bfusjly.mongodb.net/nextjs?retryWrites=true&w=majority');
    const db = client.db();
    const meetupcollection = db.collection('meetups')
    const result = await meetupcollection.find().toArray()
    await client.close()

    return {
        props: {
            meetups: result.map((m) => ({
                title: m.title,
                address: m.address,
                image: m.image,
                id: m._id.toString()
            }))
        }
    }

}

export default Home;