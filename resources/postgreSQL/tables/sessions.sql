CREATE TABLE SESSIONS (
	ID UUID DEFAULT GEN_RANDOM_UUID () PRIMARY KEY,
	USER_ID UUID NOT NULL REFERENCES USERS (ID) ON DELETE CASCADE,
	CREATED TIMESTAMPTZ DEFAULT NOW(),
	EXPIRES TIMESTAMPTZ DEFAULT NOW() + INTERVAL '5 seconds'
);