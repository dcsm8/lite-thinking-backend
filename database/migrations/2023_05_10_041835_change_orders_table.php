<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropForeign(['customer_id']); // drop the foreign key constraint
            $table->dropColumn('customer_id'); // drop the column

            $table->unsignedBigInteger('user_id'); // new column
            $table->foreign('user_id')->references('id')->on('users'); // new foreign key
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropForeign(['user_id']); // drop the new foreign key constraint
            $table->dropColumn('user_id'); // drop the new column

            $table->unsignedBigInteger('customer_id'); // old column
            $table->foreign('customer_id')->references('id')->on('customers'); // old foreign key
        });
    }
};
