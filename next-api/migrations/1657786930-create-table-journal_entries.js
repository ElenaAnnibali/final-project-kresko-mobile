exports.up = async (sql) => {
  await sql`
    CREATE TABLE journal_entries (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
			student_id integer NOT NULL UNIQUE,
			content varchar(80) NOT NULL,
			created_date date NOT NULL

    )
  `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE journal_entries
  `;
};
