import React, {useState, useEffect} from "react"

const generateUsers = () => {
    return new Array(
        {
            'id': 1,
            'name': 'Power Gamer',
            'age': 25
        },
        {
            'id': 2,
            'name': 'One Piece',
            'age': 20
        },
        {
            'id': 3,
            'name': 'Banana Pie',
            'age': 30
        },
        {
            'id': 4,
            'name': 'Viral feeds',
            'age': 34
        },
        {
            'id': 5,
            'name': 'HeartSweet',
            'age': 35
        },
        {
            'id': 6,
            'name': 'Captain America',
            'age': 23
        },
        {
            'id': 7,
            'name': 'Smoke Fire',
            'age': 22
        },
        {
            'id': 8,
            'name': 'Sun Flower',
            'age': 35
        },
        {
            'id': 9,
            'name': 'Attract Train',
            'age': 19
        },
        {
            'id': 10,
            'name': 'Serene Beauty',
            'age': 40
        },
    )
}

const Users = () => {
    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        setUsersList(generateUsers())
    }, [])

    const removeRandomUser = () => {
        if (usersList.length) {
            const removedArr = usersList.splice(Math.floor(Math.random() * usersList.length), 1)
            setUsersList(usersList.filter(item => item.id !== removedArr[0].id))
            
        } else {
            console.log('No more users...')
        }
    }
    
    useEffect(() => {
        document.title = `დარჩა ${usersList.length} მომხმარებელი`
    }, [usersList.length])

    return (
        <>
            {
                <div>
                    <h2 style={{marginLeft: 25}}>List of users</h2>
                    <ul style={{height: 300}}>
                        {usersList.map(({id, name, age}) => (
                            <li key={id} style={{ backgroundColor: id % 2 === 0 ? '#F8F8F8' : '#E8E8E8', padding: 5 }}  >
                                <strong>{name}, {age} წლის</strong>
                            </li>
                        ))}
                    </ul>
                    <br />
                    <button style={{marginLeft: 25}} onClick={removeRandomUser}>REMOVE RANDOM USER</button>
                </div>
            }
        </>
    )
}

export {Users}
