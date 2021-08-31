-- Update Queries

-- Any modifications, including UPDATE, INSERT, and DELETE statements, must reference columns from only one base table.

 update view4 set name = 'parag vora',City = 'AHMEDABAD' where name='Susan Mavris' 
        --will not allow you to update the name and city because here we are dealing with two base tables.so,the solution of this query is ,we have to apply this update query independetly on respective base tables

        -- we can update city by following query
            update view4 set City = 'AHMEDABAD' where name = 'Susan Mavris'


-- The columns being modified in the view must directly reference the underlying data in the table columns. The columns cannot be derived in any other way, such as through the following:

    -- An aggregate function: AVG, COUNT, SUM, MIN, MAX, GROUPING, STDEV, STDEVP, VAR, and VARP.
    -- A computation. The column cannot be computed from an expression that uses other columns. Columns that are formed by using the set operators UNION, UNION ALL, CROSSJOIN, EXCEPT, and INTERSECT amount to a computation and are also not updatable.


update view4 set name = 'parag vora' where name='Susan Mavris'
        -- will not allow you to update name beacuse name column is conacatenation of two fields (first_name , last_name) so it will be evaluated as computed column.


