<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginupRequest;

class AuthController extends Controller
{
        public function signup(SignupRequest $req){
        try{
            $data = $req->validated();
            $info =[
             'name' => $data['name'],
             'email' => $data['email'],
             'password' => bcrypt($data['password'])
            ];
            $user = \App\Models\User::create($info);
            $token = $user->createToken('main')->plainTextToken;
            return response()-> json([
             'user' => $user,
             'token' => $token
            ]);
        }catch(\Exception $e){
            return response() -> json([
                'message' => "user not created",
                'error' => $e->getMessage()
            ]) ;       
        }
      
        } 
        public function login(LoginupRequest $req){
            $credentials = $request-> validated();
            if(!Auth::attempt($credentials)){
                return response([
                    'message' => 'The provided credentials are incorrect.'
                ], 422);
            }

            $user = Auth::user();
            $token = $user->createToken('main')->plainTextToken;
            return response([
                'user' => $user,
                'token' => $token
            ]);
            
        }  
    
        public function logout(Request $req){

        }  
}
