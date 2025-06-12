 function generatePassword() {
      const length = document.getElementById("length").value;
      const useUpper = document.getElementById("uppercase").checked;
      const useLower = document.getElementById("lowercase").checked;
      const useNumbers = document.getElementById("numbers").checked;
      const useSymbols = document.getElementById("symbols").checked;

      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lower = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

      let allChars = "";
      if (useUpper) allChars += upper;
      if (useLower) allChars += lower;
      if (useNumbers) allChars += numbers;
      if (useSymbols) allChars += symbols
      
      if (length<4){
        document.getElementById("result").innerText = " Password cannot be less then 4 digit.";
        return;
      }

      if (length>50){
        document.getElementById("result").innerText = " Password cannot be greater then 50 digit.";
        return;
      }

      if (allChars === "") {
        document.getElementById("result").innerText = "Please select at least one option.";
        return;
      }

      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
      }

      document.getElementById("result").innerText = password;
    }