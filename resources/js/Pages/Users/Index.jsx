import Dialog from '../Components/Dialog';
import Pagination from '../Components/Pagination';
import App from './../Layouts/App';
import useDialog from './../Hooks/useDialog';
import { Inertia } from '@inertiajs/inertia';
import FormUser from '../Components/FormUser';
import { useForm } from '@inertiajs/inertia-react';

export default function Index(props) {
    
    const { data: users, links, from} = props.users;
    const { authAddUser } = props;

    const { data, setData, post, put, reset, errors } = useForm({
        name: '',
        email: '',
        username: '',
        location: '',
        password: '',
    });

    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog();
    const [editDialogHandler, editCloseTrigger, editTrigger] = useDialog();
    const [destroyDialogTrigger, destroyCloseTrigger, destroyTrigger] = useDialog();

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const openEditDialog = (user) => {
        setData(user);
        editDialogHandler();
    }

    const openDestroyDialog = (user) => {
        setData(user);
        destroyDialogTrigger()
    }

    const destroyUser = () => {
        Inertia.delete(route('users.destroy', data.id), {
            onSuccess: () => destroyCloseTrigger()
        })
    }

    const storeHandler = (e) => {
        e.preventDefault();
        post(route('users.store'), {
            data, onSuccess: () => {
                reset(),
                addCloseTrigger()
            }
        });
    }

    const updateHandler = (e) => {
        e.preventDefault();
        put(route('users.update', data.id), {
            data, onSuccess: () => {
                reset(),
                editCloseTrigger()
            }
        });
    }

    return (
        <div className="container">
            <Dialog trigger={addTrigger} size="lg" title="Create New User">
                <FormUser {...{ 
                    errors, 
                    submitLabel: 'Create', 
                    submit: storeHandler, 
                    data, 
                    onChange 
                    }} />
            </Dialog>

            <Dialog trigger={editTrigger} size="lg" title={`Edit ${data.name}`}>
            <FormUser {...{ 
                errors, 
                submitLabel: 'Update', 
                submit: updateHandler, 
                data, 
                onChange 
                }} />
            </Dialog>

            <Dialog trigger={destroyTrigger} size="lg" title={`Destroy ${data.name}`}>
                <p>Are you sure?</p>

                <button onClick={destroyUser} className="btn btn-danger me-1">Delete</button>
                <button onClick={destroyCloseTrigger} className="btn btn-success">Cancel</button>
            </Dialog>

            {authAddUser ? 
                <button onClick={addDialogHandler} className="btn btn-success">
                    Add +
                </button> : ''
            }

            <div className="card mt-4">
                <div className="card-header">
                    <h4>Users Page</h4>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th className="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{from + index}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.location}</td>
                                    <td>
                                        <div className="dropdown text-end">
                                            <button className="btn p-0" type="button" id="dropdownActions" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownActions">
                                                <li><button className="dropdown-item" onClick={() => openEditDialog(user)}>Edit</button></li>
                                                <li><button className="dropdown-item" onClick={() => openDestroyDialog(user)}>Delete</button></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination links={links} />
                </div>
            </div>
        </div>
    );
}

Index.layout = (page) => <App title="Users" children={page} />
