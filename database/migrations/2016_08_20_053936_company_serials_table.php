<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CompanySerialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_serials', function (Blueprint $table) {
            $table->increments('id');
            $table->string('company');
            $table->string('serial');
            $table->string('serial_num');
            $table->unique('serial_num');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('company_serials');
    }
}
