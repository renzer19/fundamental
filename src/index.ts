import Express from "express";

const app = Express()

const port = 3000
app.use(Express.json())
const User = [
    {
        id: 1,
        name: 'Renaldi',
        email: 'renaldi@email.com',
        age : 20,
        role : "admin"
    },
    {
        id: 2,
        name: 'Rizky',
        email: 'rizky@email.com',
        age : 30,
        role : "user"
    },
    {
        id: 3,
        name: 'Dewi',
        email: 'dewi@email.com',
        age : 28,
        role : "user"
    },
    {
        id: 4,
        name: 'Budi',
        email: 'budi@email.com',
        age : 22,
        role : "user"
    }
]

app.get("/users",(req,res) => {
    res.json({
        success : true,
        data : User
    })
})

app.post('/users', (req, res)  => {
    const { name, email } = req.body
    const newUser: any = {
        id: User.length + 1,
        name,
        email
    }
    User.push(newUser)
    res.json({
        success : true,
        data : newUser
    })
})
app.get('/users/:id', (req, res)  => {
    const id = Number(req.params.id)
    const user = User.find(i => i.id === id)
    res.json({
        success : true,
        data : user
    })
})
app.patch('/users/:id', (req, res)  => {
    const id = Number(req.params.id)
    const index = User.findIndex(i => i.id === id)

    const data:any[] = User[index] = {
        ...User[index],
        ...req.body
    }
    res.json({
        success : true,
        data : data
    })
})

app.delete('/users/:id', (req, res)  => {
    const id = Number(req.params.id)
    const index = User.findIndex(i => i.id === id)
    User.splice(index,1)
    res.json({
        success : true,
    })
})


app.listen(port,()=>{
    console.log(`Server berjalan di port ${port}`)
})