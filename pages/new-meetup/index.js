import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetup = () => {
    const router = useRouter()

    const addMeetupHandler = async (d) => {
        const response = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(d)
        })
        const data = await response.json()
        console.log(data)
        router.push('/')
    }


    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetup;