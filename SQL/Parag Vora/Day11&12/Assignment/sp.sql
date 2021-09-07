-- Q1: Create a Store Procedure which will accept name of the customer as input parameter and product the following output, List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.

CREATE PROCEDURE Get_detail_same_branch_city_depositor
	@CNAME VARCHAR(50)
AS
	SELECT D.CNAME 
	FROM DEPOSIT as D
	JOIN BRANCH AS B
	ON D.Bname = B.BNAME
	WHERE B.CITY IN (SELECT CITY FROM BRANCH WHERE BNAME 
	IN(SELECT BNAME FROM DEPOSIT WHERE Cname = @CNAME))

EXEC Get_detail_same_branch_city_depositor 'ANIL'


-- Q2: Create a Store Procedure which will accept name of the customer as input parameter and produce the following output List in JSON format, All the Depositors Having Deposit in All the Branches where input parameter customer is Having an Account
     
    CREATE Procedure Depositors 
    @Cname varchar(20)
    As
        Select * from DEPOSIT where Bname=(select Bname from DEPOSIT where Cname=@Cname) 
        for Json Path
    Go


    Execute Depositors 'ANIL'


-- Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city.

    CREATE PROCEDURE GET_NO_OF_CUSTOMERS_IN_CITY
        @CITYNAME VARCHAR(50),
        @totalcount int output
    AS
        SELECT  @totalcount= COUNT(CNAME) 
        FROM CUSTOMER WHERE CITY =@CITYNAME


    DECLARE @NO_OF_CUSTOMERS INT
    EXECUTE GET_NO_OF_CUSTOMERS_IN_CITY 'NAGPUR',  @NO_OF_CUSTOMERS  OUTPUT
    SELECT @NO_OF_CUSTOMERS AS 'NO OF CUSTOMERS'

-- Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following output List in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI


    CREATE  PROCEDURE CUSTOMER_LIST
    @CITYNAME VARCHAR(40)
    as
        SELECT c.CNAME FROM CUSTOMER c
        JOIN Deposit as de on de.Cname=c.CNAME
        join BRANCH AS BR ON  BR.BNAME=de.BNAME
        where c.CITY=@CITYNAME and   br.CITY in('MUMBAI','DELHI')
        FOR JSON PATH

    EXEC CUSTOMER_LIST 'MUMBAI'

-- Q5: Count the Number of Customers Living in the City where Branch is Located

    CREATE PROC no_of_customers
        @BRANCHNAME VARCHAR(50)
    AS
        SELECT COUNT(CNAME) AS 'NO OF CUSTOMERS' FROM CUSTOMER
        WHERE CITY IN (SELECT CITY FROM BRANCH WHERE BNAME = @BRANCHNAME)

    EXEC no_of_customers  'AJNI'  

-- Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount And insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater than 10Rs. and date should always be current date.  
    
