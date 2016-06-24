** Clone repo > npm install 
** Ensure you have mongo installed including bash CLI

== Database interaction

 - Connect to the mongo DB using bash and command;
 mongo ds013574.mlab.com:13574/friends-of-sullivan -u <dbuser> -p <dbpassword>

 - Export data to CSV, with output into app route directory
 mongoexport -h ds013574.mlab.com:13574 -d friends-of-sullivan -c <collection> -u <user> -p <password> -o <output .csv file> --csv -f <comma-separated list of field names>