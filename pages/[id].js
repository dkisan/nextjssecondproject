import { useRouter } from "next/router"
import { Fragment } from "react";

const MeeupDetails = () => {
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

    const router = useRouter();
    const id = router.query.id;
    const idx = dummy.findIndex(d => d.id == id)
    const meet = dummy[idx]

    return (
        <Fragment>
            <img src={meet.image} />
            <h3>{meet.title}</h3>
            <address>{meet.address}</address>
            <p>{meet.description}</p>
        </Fragment>

    )
}

export const getStaticPaths = () => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    id: '1'
                }
            },
            {
                params: {
                    id: '2'
                }
            }
        ]
    }
}

export const getStaticProps = (context) => {
    const id = context.params.id
    return {
        props: {
            meetupData: {
                id: id,
                title: 'first meetup',
                image: 'https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                address: 'first address',
                description: 'first description'
            }
        }
    }

}

export default MeeupDetails;