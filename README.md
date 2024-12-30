To execute the project please in this folder, make:

``` docker-compose build ```

after that, execute the containers with

``` docker-compose up -d ```

and then you have the project running, you can see the containers with:

``` docker-compose ps ```

In addition, you can access to the containers with

``` docker exec -it mongo bash ```

For example, to enter in the container and do ``` mongoosh ``` to see the data in the mongoDB container.
