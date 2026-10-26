-- ID&RS seed data extension: adds 6 incidents (total 10) with matching responses and audit logs.
-- Run after seed.sql. Assumes incident_id 1 to 4 already exist, so new incidents are 5 to 10.
-- Statuses and severities follow the CHECK constraints in schema.sql.

INSERT INTO incidents (incident_type, severity, description, status, source_ip)
VALUES
('Ransomware Activity', 'critical', 'Mass file encryption detected on file server', 'contained', '10.0.2.20'),
('Privilege Escalation', 'high', 'Standard user added to local administrators group', 'analyzing', '192.168.1.77'),
('SQL Injection Attempt', 'high', 'Malicious query strings detected in web server logs', 'resolved', '203.0.113.45'),
('Port Scan', 'low', 'Sequential port probing from external address', 'resolved', '198.51.100.23'),
('Data Exfiltration', 'critical', 'Large outbound transfer to unknown external host', 'analyzing', '10.0.3.15'),
('Malicious Attachment', 'medium', 'Executable attachment quarantined by mail gateway', 'resolved', '192.168.1.31');

INSERT INTO responses (incident_id, responder_id, action_taken, notes)
VALUES
(5, 3, 'Isolated server', 'Server taken off network and restored from backup'),
(6, 2, 'Revoked privileges', 'Account removed from administrators group and audited'),
(7, 3, 'Blocked IP', 'WAF rule added and input validation reviewed'),
(8, 2, 'Monitored', 'No further activity, IP added to watchlist'),
(9, 3, 'Blocked egress', 'Outbound rule applied pending investigation'),
(10, 2, 'Deleted message', 'Attachment removed from all mailboxes');

INSERT INTO audit_logs (user_id, action, entity, entity_id, ip_address)
VALUES
(1, 'Created incident', 'incidents', 5, '127.0.0.1'),
(3, 'Responded to incident', 'responses', 5, '10.0.2.20'),
(2, 'Updated status', 'incidents', 6, '192.168.1.77'),
(3, 'Updated status', 'incidents', 7, '203.0.113.45'),
(1, 'Created incident', 'incidents', 9, '127.0.0.1');
