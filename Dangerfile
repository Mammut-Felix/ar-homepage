packageJsonChanged = git.modified_files.include? "package.json"
packageLockJsonChanged = git.modified_files.include? "package-lock.json"
is_big_pr = git.lines_of_code > 500

message('Changed Files in this PR: \n' + git.modified_files.map { |path| "- #{path}" }.join("\n")) if git.modified_files.any?

warn('This pull request is marked as Work in Progress. DO NOT MERGE!') if github.pr_title.include? "[WIP]"

warn("Wow that's a lot of changes. Can we split this up?") if is_big_pr

warn "#{github.html_link("package.json")} was edited." if packageJsonChanged

warn("Changes were made to package.json, but not to package-lock.json", sticky: false) if packageJsonChanged && !packageLockJsonChanged

can_merge = github.pr_json["mergeable"]
warn("This PR cannot be merged yet.", sticky: false) unless can_merge

if git.commits.any? { |c| c.message =~ /^Merge branch 'master'/ }
  warn 'Please rebase to get rid of the merge commits in this PR'
end

todoist.message = "There are still some things to do in this PR."
todoist.warn_for_todos
todoist.print_todos_table

message('Good job on cleaning the code!') if git.deletions > git.insertions

# Oddly enough, it's quite possible to do some testing of Danger, inside Danger
# So, you can ignore these, if you're looking at the Dangerfile to get ideas.
#
# If these are all empty something has gone wrong, better to raise it in a comment
if git.modified_files.empty? && git.added_files.empty? && git.deleted_files.empty?
  fail "This PR has no changes at all, this is likely an issue during development."
end
