import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { Fragment } from 'react'
import Head from 'next/head'

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


    return <Fragment>
        <Head>
            <title>Meetup Form</title>
            <meta name="description"
                value="meetup form" />
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
}

export default NewMeetup;