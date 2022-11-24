import * as React from 'react';
import {Layout} from '../components/layout';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const verb = {
            method : 'GET',
            headers: {accept: 'application/json'}
        }
        console.log('coucou')
        const userInfo = async () => await fetch('http://localhost:3000/users/1', verb)
        .then((reponse, error) => {
            return reponse.json()
        })
        .then(reponse => {
            setUser(reponse)
        }) 
        userInfo()
    }, []) 
    return (
        <Layout>
            <div className='mx-auto w-96 h-[26rem] backdrop-blur-md bg-white/20 p-3 text-center rounded-md hover:shadow-md transition-all delay-100'>
                <h1 className='font-semibold text-4xl underline underline-offset-2 decoration-2'> Profile </h1>
                <p> Username :
                     {user?.username}
                </p>
                <form className='hidden'>
                    <input type={'text'} name={'username'}>Username</input>
                    <input type={'password'} name={'password'}>Password</input>
                </form>
                <button className='border border-slate-100 p-4'> Modify </button>
            </div>
        </Layout>
    )
}

export const Head = () => <title> Profile </title>

export default ProfilePage;