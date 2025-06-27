<?php

namespace App\Http\Controllers;

use App\Http\Requests\OffreRequest;
use App\Models\Offre;
use App\Providers\OffreServiceProvider;
use Illuminate\Http\Request;

class OffresController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     protected $offreService;
    /**
     * OffreController constructor.
     */
    public function __construct()
    {
        $this->offreService = new OffreServiceProvider();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $offres =  $this->offreService->index();
        return response()->json($offres,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OffreRequest $request)
    {
        $offre =  $this->offreService->store($request->validated());
        return response()->json($offre,201);
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(OffreRequest $request, $id)
{
    $offre = Offre::findOrFail($id);
    $offre->update($request->validated());
    return response()->json($offre, 200);
}

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Offre::destroy($id);
        return response()->json("",204);
    }
    
}
