# SRC-0043 — актуальная профессиональная база Jira Cloud для бизнес-аналитика

## Назначение

Пакет закрывает INT-D-04 на уровне стажёра: не только названия типов работы, но и фактическую работу с Jira Cloud. Дата проверки: **2 сентября 2026 года**.

## Официальные источники Atlassian

1. [What are work types?](https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-types/) — текущие типы работы и стандартная трёхуровневая иерархия.
2. [Configure the work type hierarchy](https://support.atlassian.com/jira-cloud-administration/docs/configure-the-issue-type-hierarchy/) — уровни, глобальная настройка и дополнительные уровни Premium/Enterprise.
3. [Company-managed и team-managed spaces](https://support.atlassian.com/jira-software-cloud/docs/what-are-team-managed-and-company-managed-projects/) — различия администрирования и совместного использования схем.
4. [Scrum backlog](https://support.atlassian.com/jira-software-cloud/docs/use-your-scrum-backlog/) и [team-managed board](https://support.atlassian.com/jira-software-cloud/docs/get-started-with-team-managed-projects/) — backlog, rank, Sprint, board, columns и status categories.
5. [Workflow transitions](https://support.atlassian.com/jira-cloud-administration/docs/create-workflow-transitions/) и [status, priority, resolution](https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-statuses-priorities-and-resolutions/) — движение работы и корректное завершение.
6. [Link work items](https://support.atlassian.com/jira-software-cloud/docs/link-issues/) — зависимости и связи, отличные от parent/child.
7. [JQL advanced search](https://support.atlassian.com/jira-software-cloud/docs/use-advanced-search-with-jira-query-language-jql/) — поиск, фильтры и отчётные выборки.
8. [Releases and versions](https://support.atlassian.com/jira-software-cloud/docs/enable-releases-and-versions/) — Fix versions, release dates и прогресс версии.
9. [Story points](https://support.atlassian.com/jira-software-cloud/docs/what-are-story-points/) — относительная оценка, не равная времени.
10. SRC-0042 — полностью изученное русское введение с поправками.

## Российская практическая проверка

11. [«Как управлять бэклогом через JIRA Structure»](https://habr.com/ru/articles/980708/), Хабр, 2025. Практический пример четырёх уровней и контрольных JQL-выборок для непривязанных элементов. Используется только как кейс конкретной конфигурации с приложением Structure: поля `Epic Link` / `Parent Link`, названия типов и доступность функций могут отличаться от текущей стандартной Jira Cloud.

Российские кейсы подтверждают главное: компании настраивают собственные типы, связи, плагины и соглашения. Они не переопределяют официальную стандартную иерархию и не могут служить универсальным шаблоном.

## Свежесть и терминология

Atlassian постепенно заменяет в интерфейсе и документации `issue` на `work item`, а `project` на `space`. Старые названия, JQL и русские переводы ещё встречаются. В учебной базе обе пары считаются узнаваемыми терминами, но смысл проверяется по конкретной версии Jira Cloud/Data Center и конфигурации организации.

## Решение

Принять пакет и [подробный русский справочник](../source-notes/SRC-0043-jira-cloud-current-notes.md) как ядро INT-D-04. Не учить одну иерархию как универсальную: сначала смотреть конфигурацию сайта, тариф и соглашения команды.
