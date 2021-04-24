# Tinder-cats

## routes

`GET /cats` -> list all cats
`GET /cats/:id` -> cat detail

`GET /cats/create` -> show the form for create a cat
`POST /cats` -> create the cat

`POST /cats/:id/delete` -> delete the cat with that id

`GET /cats/:id/edit` -> show the form to edit
`POST /cats/:id` -> Cat.findByIdAndUpdate(id, { update }) (Pseudo)

const id = req.params.id === const { id } = req.params

const catToEdit = { name: 'asd' }
res.render('path', { catToEdit }) === res.render('path', { catToEdit: catToEdit })
// vista catToEdit.name === this.catToEdit.name
