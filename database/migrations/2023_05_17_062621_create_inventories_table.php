<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->string('company_NIT')->index();
            $table->foreign('company_NIT')->references('NIT')->on('companies');
            $table->unsignedBigInteger('product_id')->index();
            $table->foreign('product_id')->references('id')->on('products');
            $table->integer('quantity');
            $table->timestamps();

            $table->unique(['company_NIT', 'product_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventories');
    }
};
