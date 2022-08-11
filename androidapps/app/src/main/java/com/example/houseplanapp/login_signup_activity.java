package com.example.houseplanapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class login_signup_activity extends AppCompatActivity {

    private Button login;
    private Button signup;


    private int backpresscounter = 0;
    @Override
    public void onBackPressed() {
        backpresscounter++;
        if (backpresscounter == 2){
            super.onBackPressed();
        }
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login_signup);

        login = findViewById(R.id.login_btn);
        signup = findViewById(R.id.signup_btn);


        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(login_signup_activity.this,LoginActivity.class);
                startActivity(intent);
                finish();

            }
        });

        signup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(login_signup_activity.this,SignUp.class);
                startActivity(intent);
                finish();

            }
        });

    }
}