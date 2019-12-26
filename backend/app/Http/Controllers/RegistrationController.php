<?php

namespace App\Http\Controllers;
use App\Registration;
use Propaganistas\LaravelPhone\PhoneNumber;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $find_number = Registration::where('phone_number', $request->phone_number)->first();

        if($find_number->token == $request->token){
            $all_user = Registration::all();
            return response()->json([
                "data" => $all_user
            ], 201);
        }else{
            return response()->json([
                "message" => "you're not allowed to do this"
            ], 200);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|max:50',
            'last_name' => 'required|max:50',
            'email' => 'required|email',
            'phone_number' => 'phone:ID, mobile',
            'date_of_birth' => 'date'
        ]);
        
        if ($validator->fails()) {    
            return response()->json($validator->messages(), 200);
        }else{
            try {
                $phone_number = PhoneNumber::make($request->phone_number, 'ID')->formatForMobileDialingInCountry('ID');

                Registration::create([
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'email' => $request->email,
                    'gender' => $request->gender,
                    'phone_number' => $phone_number,
                    'date_of_birth' => $request->date_of_birth
                ]);
    
                return response()->json([
                    "message" => "Registration record created successfully"
                ], 201);
            } catch (\Illuminate\Database\QueryException $e){
                $errorCode = $e->errorInfo[1];
                if($errorCode == 1062){
                    return response()->json([
                        "message" => "Duplicate entry for phone number or email"
                    ], 202);
                }
            }
        }
    }

    public function login(Request $request)
    {
        $number = PhoneNumber::make($request->phone_number, 'ID')->formatForMobileDialingInCountry('ID');
        $find_number = Registration::where('phone_number', $number)->first();
        
        if($find_number){
            $string = uniqid();
            
            $user = Registration::find($find_number->id);
            $user->token = $string;
            $user->save();

            return response()->json([
                "message" => 'login success',
                "token" => $string,
                "phone_number" => $find_number->phone_number
            ], 201);
        }else{
            return response()->json([
                "message" => 'User not found'
            ], 200);
        }
    }

    public function logout(Request $request)
    {
        $find_number = Registration::where('phone_number', $request->phone_number)->first();

        if($find_number){
            $user = Registration::find($find_number->id);
            $user->token = '';
            $user->save();

            return response()->json([
                "message" => "logout success"
            ], 201);
        }else {
            return response()->json([
                "message" => "logout not success"
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
