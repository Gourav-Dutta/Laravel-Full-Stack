
<table border="1">
    <tr>
        
        <td>Name</td>
        <td>Email</td>
        <td>Password</td>
    </tr>


    @foreach($info as $data)

    <tr>
        
        <td>{{$data->name}}</td>
        <td>{{$data->email}}</td>
        <td>{{$data->password}}</td>
        <td>
            <form action="/get-one" method="POST">
                @csrf
                @method("PUT")
                <input type="hidden" name="id" value="{{$data->id}} ">
                <button>Edit</button>
            </form>
        </td>
        <td>
            <form action="/delete-one" method="POST">
                @csrf
                @method("DELETE")
                <input type="hidden" name="id" value="{{$data->id}} ">
                <button>Delete</button>
            </form>
        </td>
    </tr>

    @endforeach
</table>

