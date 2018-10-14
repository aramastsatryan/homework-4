<script>
    //////////////FUNCTION TRIANGLE STARS
    const computeStr = function(char, num){
      let result = "";
      while(num > 0){
        result = result + char;
        num = num - 1;
      }
    return result;
  };
  
    const printStr = function(h, height){
      console.log(computeStr(" ", h - height) + computeStr("*", 2 * height - 1));
    };
  
    const triangleStars = function(height){
      let h = height;
      while(height > 0){
        printStr(h, height);
        height = height - 1;
      }
      return '';
    };
  ////////////END OF THE FUNCTION




    //////////////FUNCTION MULTI TO SINGLE
    const multiToSingle = function([array1, array2]){
      const resultedArray = [];
      let index = 0;
      let index1 = 0;
      while(index <= array1.length - 1){
        resultedArray[index1] = array1[index];
        index1 = index1 + 1;
        index = index + 1;
      };
      index = 0;
      while(index <= array2.length - 1){
        resultedArray[index1] = array2[index];
        index1 = index1 + 1;
        index = index + 1;
      };
      return "[" + resultedArray + "]";
    };




    //////////////FUNCTION FIND MIN MAX
    const findMinMax = function(array1, boolean){
      let result = 0;
      let index = 1;
      if(boolean === true){
        result = array1[0]
        while(index <= array1.length - 1){
          if(result < array1[index]){
            result = array1[index];
          }
          index = index + 1;
        }
        return result;
      }else if(boolean === false){
        result = array1[0];
        while(index <= array1.length - 1){
          if(result > array1[index]){
            result = array1[index]
          }
          index = index + 1;
        }
        return result;
      };
    };




  /////////////////FUNCTION FOREACH
    const forEach = function(array1, func){
      let index = 0;
      while(index < array1.length){
        func(array1[index]);
        index = index + 1;
      }
      return '';
    };



  
  ////////////////FUNCTION SUM
    const sum = function(arr){
      let index = 0;
      let result = 0;
      while(index < arr.length){
        result = result + arr[index];
        index = index + 1;
      }
      return result;
    };




  ///////////////FUNCTION REVERSE OF THE STRING
    const reverse = function(str1){
      let index = str1.length - 1;
      let new_str = "";
      while(index >= 0){
        new_str = new_str + str1[index];
        index = index - 1;
      }
      return new_str;
    };




  //////////////FUNCTION CHECKERBOARD
    const f = function(num){
      let i = 0;
      let txt = '';
      while(i < num){
        txt = txt + '* ';
        i = i + 1;
      };
      return txt;
    };
  
  
    const checkerboard = function(num){
      let n = 0;
      while(n < num){
        let s = f(num);
        if(n % 2 !== 0){
          s = " " + s;
        };
        console.log(s)
        n = n + 1;
      };
      return "";
    };
</script>