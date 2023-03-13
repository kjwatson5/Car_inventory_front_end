let token = '7fe450dd7c65b0a19eb88c30b0572f45255af803b6eb1b44'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://balanced-exuberant-cross.glitch.me/api/car`,
        {
            method: 'GET',
            mode: "cors",
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://balanced-exuberant-cross.glitch.me/api/car`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to creatre new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://balanced-exuberant-cross.glitch.me/api/car${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string, data: any = {}) => {
        const response = await fetch(`https://balanced-exuberant-cross.glitch.me/api/car${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}
