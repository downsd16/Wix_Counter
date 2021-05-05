# Wix_Counter
A simple JS counter built for use in Wix dynamic elements.

Author:   Devin Downs
Position: AIS VP of Tech
Date:     5/5/21
Version:  1.1

Directions:
1. Import code from main.js into the Wix Page Script editor
2. Create as many text elements containing the value ("0") as needed
3. Fill the array 'tags' with the string values for the elements (will start with a #)
4. Fill the array 'units' with whatever string you would like to follow the number (+, %, x, etc.)
5. Fill the array 'logicals' with whatever string you would like to come before the number (<,>, etc.) 
6. Fill the array 'endNums' with the final values 
7. Change 'increments' and 'durations' to your liking
  7a. Make sure 'increments' are all factors of the final values (ex. final value = 50, increments can be 2,5,10,25, etc.)
8. Change the analyst credits to reflect your team
