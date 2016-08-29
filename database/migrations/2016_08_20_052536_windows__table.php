<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class WindowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('windows', function (Blueprint $table) {
            $table->increments('id');
            $table->string('funcode');
            $table->unique('funcode');
            $table->string('company');
            $table->string('model');
            $table->integer('model_num');
            $table->string('rowds');
            $table->string('des');
            $table->string('kamoyot');
            $table->string('h_l');
            $table->text('medot');
            $table->text('atmem_brush');
            $table->text('abzrem');
            $table->text('glass');
            $table->text('profels');
            $table->text('profels_des');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('windows');
    }
}
