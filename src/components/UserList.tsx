import React, { useEffect } from 'react'
import { useActions } from '../hook/useActions'
import { useTypesSelector } from '../hook/useTypeSelector'


const UserList: React.FC = () => {
    const { users, error, loading } = useTypesSelector(state => state.user)
    const {fetchUsers} = useActions()
    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(user =>
                <div>{user.name}</div>
            )}
        </div>
    )
}

export default UserList
