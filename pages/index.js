import MeetupList from "../components/meetups/MeetupList";


const Home = () => {
    const dummy = [
        {
            id: 1,
            title: 'first meetup',
            image: 'https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            address: 'first address',
            description: 'first description'
        },
        {
            id: 2,
            title: 'second meetup',
            image: 'https://images.pexels.com/photos/11499270/pexels-photo-11499270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            address: 'second address',
            description: 'second description'
        },
    ]
    return <MeetupList meetups={dummy} />

}

export default Home;